import { Button } from 'components/Button';
import { useWindowSize } from 'hooks';
import { useEffect, useState } from 'react';

interface HelpStep {
  targetRef: React.RefObject<HTMLElement>;
  text: React.ReactNode;
  width?: number;
}

interface HelpOverlayProps {
  steps: HelpStep[];
  onClose: () => void;
}

export const HelpOverlay = (props: HelpOverlayProps) => {
  const { steps, onClose } = props;

  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const { width, height } = useWindowSize();
  // console.log('targetRect: ', targetRect);

  useEffect(() => {
    // console.log('steps: ', steps);
    const updatePosition = () => {
      const current = steps[currentStep].targetRef.current;
      if (current) {
        setTargetRect(current.getBoundingClientRect());
      }
    };

    updatePosition();
  }, [steps, currentStep, width, height]);

  return (
    <div>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        style={{ zIndex: 1000 }}
      ></div>
      {/* Highlighted element */}
      {targetRect && (
        <div
          className="absolute border-4 border-solid border-blue-500 rounded-lg"
          style={{
            zIndex: 1001,
            top: targetRect.top,
            left: targetRect.left,
            width: targetRect.width,
            height: targetRect.height,
          }}
        ></div>
      )}
      {/* Text and navigation */}
      {targetRect && (
        <div
          className="fixed bg-white p-4 text-black shadow-md -translate-x-full w-[350px] -translate-y-1/2"
          style={{
            zIndex: 1002,
            top: targetRect.top + targetRect.height / 2,
            left: targetRect.left - 20,
            width: steps[currentStep].width,
          }}
        >
          <p className="text-sm mb-2 text-neutral-light">
            Step {currentStep + 1}/{steps.length}
          </p>
          {steps[currentStep].text}
          <div className="flex justify-between space-x-2">
            <Button
              className="font-semibold cursor-pointer opacity-50 hover:opacity-100 p-0 text-lg"
              onClick={() => setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep))}
              disabled={currentStep === 0}
              type="text"
            >
              Prev
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button
                className="font-semibold cursor-pointer opacity-50 hover:opacity-100 p-0 text-lg"
                onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
                type="text"
              >
                Next
              </Button>
            ) : (
              <Button
                className="font-semibold cursor-pointer opacity-50 hover:opacity-100 p-0 text-lg"
                onClick={onClose}
                type="text"
              >
                Close
              </Button>
            )}
          </div>
        </div>
      )}
      <div
        className="absolute w-3 h-3 bg-white transform rotate-45 -top-[16px] -right-[16px] border-solid border-neutral shadow-lg border-r-0 border-b-0 z-[1003]"
        // style={{
        //   left: `calc(50% - ${offsetWidth / 2}px)`,
        // }}
      ></div>
    </div>
  );
};
