import React, { ReactNode, HTMLAttributes } from 'react';
import './Tag.scss';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  attrId?: string;
  attrClass?: string;
  value?: ReactNode;
  severity?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger' | 'contrast';
  rounded?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  unstyled?: boolean;
}

export const Tag: React.FC<TagProps> = ({
  children,
  attrId = null,
  attrClass = null,
  value = null,
  severity = null,
  rounded = false,
  icon,
  iconPosition = 'left',
  unstyled = false,
  ...props
}) => {
  const attrIdList = attrId ? `${attrId}` : '';
  const classes = [
    attrClass,
    'p-tag',
    severity,
    rounded && 'p-tag-rounded',
    unstyled && 'p-tag-unstyled',
  ]
    .filter(Boolean)
    .join(' ');
  const iconPositionClass = iconPosition === 'right' ? 'p-tag-icon-right' : 'p-tag-icon-left';

  return (
    <span
      id={attrIdList || undefined}
      className={classes}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={`p-tag-icon ${iconPositionClass}`}>
          {icon}
        </span>
      )}

      {value && <span className='p-tag-value'>{value}</span>}

      {icon && iconPosition === 'right' && (
        <span className={`p-tag-icon ${iconPositionClass}`}>
          {icon}
        </span>
      )}

      {children}
    </span>
  );
};

export default Tag;
