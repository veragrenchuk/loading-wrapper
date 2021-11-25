import React, { ReactNode } from "react";
import { CircularProgress } from "@material-ui/core";
import LocalBackdrop, {
  LocalBackdropVariant,
  LocalBackdropTypesType
} from "./LocalBackdrop";

export interface LoadingWrapperProps {
  size?: number;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  type?: LocalBackdropTypesType;
  variant?: LocalBackdropVariant;
}

const LoadingWrapper = (props: LoadingWrapperProps) => {
  const { loading, children, size = 30, ...rest } = props;

  return (
    <LocalBackdrop
      {...rest}
      open={!!loading}
      content={<CircularProgress size={size} data-cy="loading-spinner" />}
    >
      {children}
    </LocalBackdrop>
  );
};

export default LoadingWrapper;
