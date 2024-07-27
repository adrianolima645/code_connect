import styles from "./inputText.module.css";

interface InputTextProps {
  id?: string;
  label?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  required: boolean;
  placeholder: string;
  maxLength?: number;
  helpText?: string;
}

export const InputText = (props: InputTextProps) => {
  const {
    id,
    label,
    helpText,
    name,
    value,
    onChange,
    type,
    required,
    placeholder,
    maxLength,
  } = props;

  let formattedLabel = label;

  if (required) {
    formattedLabel = label + " *";
  }

  return (
    <div className={styles.inputBlock}>
      {label && (
        <label htmlFor={id}>
          {formattedLabel}
          <span>{helpText}</span>
        </label>
      )}
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};
