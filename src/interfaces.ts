export interface Input {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  validator?: (value: string | number) => boolean;
  helperText?: string;
}

export interface SingleInputFormProps {
  heading: string;
  inputClass?: string;
  containerClass?: string;
  addButtonClass?: string;
  inputContainerClass?: string;
  list: { value: string }[];
  setList: React.Dispatch<React.SetStateAction<SingleInputFormProps["list"]>>;
}

export interface InputProps {
  className?: string;
  value: string | number;
  onChange: (value: string) => void;
}
