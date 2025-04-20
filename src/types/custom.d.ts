declare module '@cityofdetroit/cod-design-system/src/components/atoms/Button' {
    const Button: any;
    export default Button;
  }

  declare namespace JSX {
    interface IntrinsicElements {
      'cod-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'data-primary'?: string;
        'data-label'?: string;
        'data-background-color'?: string;
        'data-shape'?: string;
        'data-hover'?: string;
        'data-img'?: string;
        'data-img-alt'?: string;
        'data-size'?: string;
      };
    }
  }
  