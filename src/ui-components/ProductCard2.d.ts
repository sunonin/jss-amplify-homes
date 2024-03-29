/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCard2OverridesProps = {
    ProductCard2?: PrimitiveOverrideProps<FlexProps>;
    "Component 1"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ProductCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductCard2OverridesProps | undefined | null;
}>;
export default function ProductCard2(props: ProductCard2Props): React.ReactElement;
