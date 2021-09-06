interface Input {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    validator?: (value: string) => boolean;
    helperText?: string;
}

export interface SingleInputFormProps {
    containerStyles?: {};
    onDelete: (e: any) => void;
    inputs: Input[];
}
