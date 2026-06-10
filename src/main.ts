import './styles/main.css';
import { initRouter } from './router';
import { initBackgroundCanvas } from './utils/backgroundCanvas';
import { initModalControls } from './utils/modals';

initBackgroundCanvas();
initModalControls();
initRouter();
