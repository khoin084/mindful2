body {
				margin: 0;
				overflow-y: visible;
				overflow-x: hidden;
			}
			#container {
				padding-bottom: 100px;
			}
			canvas {
				display: block;
			}
			.ui {
				position: absolute;
			}
			.reticle {
				z-index: 10;
				background-color: #ff0000;
				border-radius: 2px;
				width: 5px;
				height: 5px;
				top: 50%;
				display: block;
				-ms-transform: translate(-50%, -50%);
				-webkit-transform: translate(-50%, -50%);
				-moz-transform: translate(-50%, -50%);
				-o-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);	/* Set hot-point to centre of element*/
			}
			.left {
				left: 25%;
				-ms-transform: translateX(-50%);
				-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				-o-transform: translateX(-50%);
				transform: translateX(-50%);
			}
			.right {
				left: 75%;
				-ms-transform: translateX(-50%);
				-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				-o-transform: translateX(-50%);
				transform: translateX(-50%);
			}
			.overlay {
				z-index: 0;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0.75;
				background-color: #ffffff;
			}
			#interactionButton {
				z-index: 10;
				background-color: #ff0000;
				width: 10%;
				height: 30%;
				top: 0;
				left: 50%;
				-ms-transform: translateX(-50%);
				-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				-o-transform: translateX(-50%);
				transform: translateX(-50%);
			}
			.message {
				z-index: 5;
				top: 25%;
				width: 25%;
				text-align: center;
				font-size: 5vh;
				color: #f0f0f0;
				text-shadow:
			   -1px -1px 1px #000,  
			    1px -1px 1px #000,
			   -1px  1px 1px #000,
			    1px  1px 1px #000;
			}