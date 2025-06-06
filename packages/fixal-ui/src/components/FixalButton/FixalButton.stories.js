import { FixalButton } from './FixalButton';

export default {
  title: 'Components/Button',
  component: FixalButton,
  tags: ['autodocs'],
  args: {
    primary: false,
    backgroundColor: undefined,
    size: 'medium',
    label: 'Button',
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const WithBackground = {
  args: {
    backgroundColor: '#00ff00',
    label: 'Button with background',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Disabled Button',
  },
};
