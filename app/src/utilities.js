export const drawRect = (detections, ctx) =>{
    // Loop through each prediction
    detections.forEach(prediction => {
  
      // Extract boxes and classes
      const [x, y, width, height] = prediction['bbox'];

      const color = '00ff0040'
  
      // Draw rectangles and text
      ctx.beginPath();   
      ctx.fillStyle = '#' + color
      ctx.rect(x, y, width, height); 
      ctx.fill();
    });
  }