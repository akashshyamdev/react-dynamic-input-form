export interface Input {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  validator?: (value: string | number) => boolean;
  helperText?: string;
}

export interface SingleInputFormProps {
  list: { value: string }[];
  setList: React.Dispatch<React.SetStateAction<SingleInputFormProps["list"]>>;
  containerStyles?: {};
}

export interface InputProps {
  name: string;
  label: string;
  helperText?: string;
  value: string | number;
  onChange: (value: string) => void;
  validator?: (value: InputProps["value"]) => boolean;
}
