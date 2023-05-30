interface AnimatedDivProps {
  children: React.ReactNode;
  // fromTop: number;
  transform: string;
  className?: string;
  id?: string;
}

export const AnimatedDiv = (props: AnimatedDivProps) => {
  const { children, transform, className = '', id } = props;
  // const [transform, setTransform] = useState(
  //   'translate3d(0px,0px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)'
  // );

  // useEffect(() => {
  //   // if scrolled down, then scale down
  //   const translate3d = `0px,0px,0px`;
  //   const scale3d = `1,1,1`;
  //   const rotateX = `0deg`;
  //   const rotateY = `0deg`;
  //   const skew = `0deg, 0deg`;
  //   setTransform(
  //     `translate3d(${translate3d}) scale3d(${scale3d}) rotateX(${rotateX}) rotateY(${rotateY}) skew(${skew})`
  //   );
  // }, [fromTop]);

  return (
    <div
      id={id}
      style={{
        transform: transform,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        transitionTimingFunction: 'ease-out',
        transition: '0.75s',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
