import * as React from "react";

export const LogRerenders: React.FC<{ name: string }> = ({
  name,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  let rerenders = React.useRef<number>(0);

  const mutationCallback = React.useCallback((mutationRecord) => {
    if (mutationRecord) {
      console.log({ mutationRecord });
      rerenders.current = rerenders.current + 1;
      console.log(`<${name} /> ha re-rendereado: ${rerenders.current} veces`);
    }
  }, []);

  React.useEffect(() => {
    const mutationObserver = new MutationObserver(mutationCallback);
    if (!ref.current) {
      return;
    }
    mutationObserver.observe(ref.current, {
      childList: true,
      subtree: true,
      characterData: true,
      characterDataOldValue: true,
    });
    // // UNCOMMENT TO TEST
    // setTimeout(() => {
    //   setState((prev) => prev + 1);
    //   setTimeout(() => {
    //     setState((prev) => prev + 1);
    //   }, 1500);
    // }, 1500);
  }, [mutationCallback]);

  return <div ref={ref}>{children}</div>;
};
