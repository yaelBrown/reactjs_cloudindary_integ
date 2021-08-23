import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

function App() {
  return (
    <CloudinaryContext cloudName={this.props.cloudName} uploadPreset={this.props.uploadPreset}>
      <div className="App">
        <h1>reactjs cloudinary test</h1>

        {/* Have to add the widget */}
        {/* https://www.youtube.com/watch?v=Y-VgaRwWS3o */}

      </div>
    </CloudinaryContext>
  );
}

export default App;




