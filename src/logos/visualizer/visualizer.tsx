import { Component, h, Element, Host } from '@stencil/core';

@Component({
	tag: 'app-visualizer',
	styleUrls: ['main.css'],
	scoped: true
})
export class Visualizer {
	@Element() _element: HTMLAppVisualizerElement;

	private _fileInputElement: HTMLInputElement;
	private _audioPlayer: HTMLAudioElement;
	private _canvas: HTMLCanvasElement;
	private _context: AudioContext;
	private _source: MediaElementAudioSourceNode;

	componentDidLoad() {
		this._fileInputElement = this._element.querySelector('#music-upload');
		this._audioPlayer = this._element.querySelector('#audio-player');
		this._canvas = this._element.querySelector('#visualizer');

		this._fileInputElement.addEventListener('change', () => this.handleChange());
	}

	private handleChange() {
		this._audioPlayer.src = URL.createObjectURL(this._fileInputElement.files[0]);
		this._audioPlayer.load();
		this._audioPlayer.play();

		this._context = new AudioContext();
		this._source = this._context.createMediaElementSource(this._audioPlayer);
		const analyser = this._context.createAnalyser();
		const ctx = this._canvas.getContext('2d');
		this._source.connect(analyser);
		analyser.connect(this._context.destination);
		analyser.fftSize = 256;
		const bufferLength = analyser.frequencyBinCount;

		let dataArray = new Uint8Array(bufferLength);

		const WIDTH = this._canvas.width;
		const HEIGHT = this._canvas.height;

		let turnOffset = 0;
		function draw() {
			requestAnimationFrame(draw);

			analyser.getByteFrequencyData(dataArray);
			ctx.fillStyle = 'black';
			ctx.fillRect(0, 0, WIDTH, HEIGHT);
			ctx.fillStyle = 'white';
			turnOffset = turnOffset + 0.002;
			for (var i = 0; i < bufferLength; i++) {
				const bounceLength = dataArray[i];
				const x =
					WIDTH / 2 +
					(175 + bounceLength * 0.3) *
						Math.sin((360 / bufferLength) * i - turnOffset);
				const y =
					HEIGHT / 2 +
					(175 + bounceLength * 0.3) *
						Math.cos((360 / bufferLength) * i - turnOffset);

				ctx.fillRect(x, y, 3, 3);
			}

			// ctx.fillStyle = 'white';
			// ctx.font = '10rem Arial';
			// ctx.fillText('LAB', 105, 360);
		}

		this._audioPlayer.play();
		draw();
	}

	render() {
		return (
			<Host>
				<app-layout>
					<div class="relative">
						<canvas width="500" height="600" id="visualizer"></canvas>
						<img src="../../assets/lab.png" alt="what" />
					</div>
				</app-layout>
				<div class="audio-control">
					<input type="file" id="music-upload" accept="audio/*" />
					<audio id="audio-player" controls />
				</div>
			</Host>
		);
	}
}
