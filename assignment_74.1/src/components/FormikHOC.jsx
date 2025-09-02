import React from 'react';
import { useField } from 'formik';

function FormikHOC({ InputComponent }) {
    return function OutputComponent({ name, ...props }) {
        const [field, meta] = useField({ name });
        const { value, onChange, onBlur } = field;
        const { error, touched } = meta;

        const border = touched && error ? 'border border-red-500' : 'border border-blue-400';

        return (
            <div className="flex flex-col max-w-[225.5px]">
                <InputComponent
                    name={name}
                    {...props}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    border={border}
                />
                {touched && error && <div className="text-red-500">{error}</div>}
            </div>
        );
    };
}

export default FormikHOC;
