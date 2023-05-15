import { useGeneratorColor } from 'hooks';
import { useEffect, useRef } from 'react';

export const Artpiece = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { primaryButtonColor, secondaryButtonColor, accentColor, overviewBgColor } =
    useGeneratorColor();

  useEffect(() => {
    const svg = svgRef.current;
    // clear the SVG
    // const shapes = ['circle'];
    // const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    // const colors = [primaryButtonColor, secondaryButtonColor, accentColor];
    // const color = colors[Math.floor(Math.random() * colors.length)];
    if (svg) {
      while (svg.firstChild) {
        svg.firstChild.remove();
      }

      let shape: SVGElement;

      // shape 1
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      shape.setAttribute('cx', '200');
      shape.setAttribute('cy', '200');
      shape.setAttribute('r', '70');
      shape.setAttribute('fill', primaryButtonColor);
      svg.appendChild(shape);
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      shape.setAttribute('cx', '200');
      shape.setAttribute('cy', '200');
      shape.setAttribute('r', '50');
      shape.setAttribute('fill', overviewBgColor);
      svg.appendChild(shape);

      // shape 2
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      shape.setAttribute('cx', '270');
      shape.setAttribute('cy', '100');
      shape.setAttribute('r', '30');
      shape.setAttribute('fill', secondaryButtonColor);
      svg.appendChild(shape);
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      shape.setAttribute('cx', '270');
      shape.setAttribute('cy', '100');
      shape.setAttribute('r', '27');
      shape.setAttribute('fill', overviewBgColor);
      svg.appendChild(shape);

      // shape 3
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      shape.setAttribute('cx', '500');
      shape.setAttribute('cy', '250');
      shape.setAttribute('r', '150');
      shape.setAttribute('fill', accentColor);
      svg.appendChild(shape);
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      shape.setAttribute('cx', '500');
      shape.setAttribute('cy', '250');
      shape.setAttribute('r', '140');
      shape.setAttribute('fill', overviewBgColor);
      svg.appendChild(shape);

      // shape 4
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', 'M 500 130 a 50 50 0 1 1 0.001 0');
      shape.setAttribute('fill', 'transparent');
      shape.setAttribute('stroke', primaryButtonColor);
      shape.setAttribute('stroke-width', '5');
      svg.appendChild(shape);

      // shape 5
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', 'M 400 430 a 80 80 0 1 1 0.001 0');
      shape.setAttribute('fill', 'transparent');
      shape.setAttribute('stroke', secondaryButtonColor);
      shape.setAttribute('stroke-width', '25');
      svg.appendChild(shape);

      // shape 6
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', 'M 600 400 a 40 40 0 1 1 0.001 0');
      shape.setAttribute('fill', 'transparent');
      shape.setAttribute('stroke', primaryButtonColor);
      shape.setAttribute('stroke-width', '5');
      svg.appendChild(shape);

      // shape 7
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', 'M 650 450 a 40 40 0 1 1 0.001 0');
      shape.setAttribute('fill', 'transparent');
      shape.setAttribute('stroke', secondaryButtonColor);
      shape.setAttribute('stroke-width', '5');
      svg.appendChild(shape);

      // shape 8
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', 'M 150 450 a 75 75 0 1 1 0.001 0');
      shape.setAttribute('fill', 'transparent');
      shape.setAttribute('stroke', secondaryButtonColor);
      shape.setAttribute('stroke-width', '2');
      svg.appendChild(shape);

      // shape 9
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', 'M 690 240 a 90 90 0 1 1 0.001 0');
      shape.setAttribute('fill', 'transparent');
      shape.setAttribute('stroke', primaryButtonColor);
      shape.setAttribute('stroke-width', '15');
      svg.appendChild(shape);

      // shape 10
      shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      shape.setAttribute('d', 'M 150 180 a 80 80 0 1 1 0.001 0');
      shape.setAttribute('fill', 'transparent');
      shape.setAttribute('stroke', primaryButtonColor);
      shape.setAttribute('stroke-width', '7');
      svg.appendChild(shape);
    }
  }, [primaryButtonColor, secondaryButtonColor, accentColor]);

  return (
    <svg
      ref={svgRef}
      width="800"
      height="500"
      className="rounded-lg"
      style={{
        backgroundColor: 'transparent',
      }}
    />
  );
};
