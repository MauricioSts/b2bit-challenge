interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export const Label = (props: LabelProps) => {
  return <label className="text-[18px] leading-6 font-bold" {...props}></label>;
};
