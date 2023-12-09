const Instagram = (props: IconProps) => {
  const { className, title } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      {title ?? <title>{title}</title>}
      <path d="M14.45 4.55a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3.833 2.017a6.326 6.326 0 0 0-.383-2.025 4.117 4.117 0 0 0-.967-1.475 3.916 3.916 0 0 0-1.475-.959 6.083 6.083 0 0 0-2.025-.391c-.883-.05-1.166-.05-3.433-.05s-2.55 0-3.433.05a6.083 6.083 0 0 0-2.025.391 3.983 3.983 0 0 0-1.475.959 3.917 3.917 0 0 0-.959 1.475 6.083 6.083 0 0 0-.391 2.025c-.05.883-.05 1.166-.05 3.433s0 2.55.05 3.433c.014.693.146 1.378.391 2.025.204.558.532 1.063.959 1.475.414.426.918.753 1.475.959a6.082 6.082 0 0 0 2.025.391c.883.05 1.166.05 3.433.05s2.55 0 3.433-.05a6.08 6.08 0 0 0 2.025-.391 3.914 3.914 0 0 0 1.475-.959c.427-.414.757-.918.967-1.475.238-.65.367-1.333.383-2.025 0-.883.05-1.166.05-3.433s0-2.55-.05-3.433Zm-1.5 6.766a4.672 4.672 0 0 1-.283 1.55c-.133.363-.347.69-.625.959-.27.275-.597.488-.958.625a4.675 4.675 0 0 1-1.55.283c-.834.042-1.142.05-3.334.05-2.191 0-2.5 0-3.333-.05a4.775 4.775 0 0 1-1.617-.25 2.725 2.725 0 0 1-.916-.625 2.5 2.5 0 0 1-.617-.958 4.616 4.616 0 0 1-.333-1.584c0-.833-.05-1.141-.05-3.333s0-2.5.05-3.333c.003-.541.102-1.077.291-1.584a2.5 2.5 0 0 1 .659-.916c.253-.287.566-.514.916-.667a4.775 4.775 0 0 1 1.584-.283c.833 0 1.141-.05 3.333-.05s2.5 0 3.333.05a4.675 4.675 0 0 1 1.55.283c.379.14.719.37.992.667.273.256.486.569.625.916.185.508.281 1.044.283 1.584.042.833.05 1.141.05 3.333s-.008 2.5-.05 3.333ZM10 5.725A4.275 4.275 0 1 0 14.283 10 4.268 4.268 0 0 0 10 5.725Zm0 7.05a2.775 2.775 0 1 1 0-5.55 2.775 2.775 0 0 1 0 5.55Z" />
    </svg>
  );
};
const Facebook = (props: IconProps) => {
  const { className, title } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      {title ?? <title>{title}</title>}
      <path d="M12.6 4.433h1.567v-2.65a21.76 21.76 0 0 0-2.284-.116c-2.266 0-3.816 1.383-3.816 3.916v2.184H5.508v2.966h2.559v7.6h3.066v-7.6h2.55l.384-2.966h-2.934V5.875c0-.875.234-1.442 1.467-1.442Z" />
    </svg>
  );
};
const Linkedin = (props: IconProps) => {
  const { className, title } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      {title ?? <title>{title}</title>}
      <path d="M17.058 1.667H2.942a1.209 1.209 0 0 0-1.225 1.192v14.283a1.208 1.208 0 0 0 1.225 1.192h14.116a1.208 1.208 0 0 0 1.225-1.192V2.859a1.208 1.208 0 0 0-1.225-1.192ZM6.742 15.617h-2.5v-7.5h2.5v7.5Zm-1.25-8.55a1.3 1.3 0 1 1 0-2.6 1.308 1.308 0 1 1 0 2.6Zm10.266 8.55h-2.5v-4.025c0-1.008-.358-1.667-1.266-1.667a1.375 1.375 0 0 0-1.284.909 1.668 1.668 0 0 0-.083.608v4.166h-2.5v-7.5h2.5v1.059a2.5 2.5 0 0 1 2.258-1.25c1.667 0 2.875 1.075 2.875 3.383v4.317Z" />
    </svg>
  );
};
const X = (props: IconProps) => {
  const { className, title } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      {title ?? <title>{title}</title>}
      <path
        d="M13.375 0h2.605l-5.722 6.79L16.94 16h-5.246l-4.11-5.598L2.884 16H.277L6.34 8.738-.062 0h5.378l3.711 5.113Zm-.914 14.406h1.445L4.555 1.536H3.004Zm0 0"
        transform="translate(1.57 2.17)"
      />
    </svg>
  );
};
const Sun = (props: IconProps) => {
  const { className, title } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
    >
      {title ?? <title>{title}</title>}
      <path
        stroke="none"
        d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"
      />
    </svg>
  );
};
const Moon = (props: IconProps) => {
  const { className, title } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
    >
      {title ?? <title>{title}</title>}
      <path
        stroke="none"
        d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"
      />
    </svg>
  );
};

interface IconProps {
  className?: string;
  title?: string;
}

interface IconsProps {
  icon: string;
  className?: string;
  title?: string;
}

interface IconsSet {
  [key: string]: (props: IconProps) => JSX.Element;
}

const iconsSet: IconsSet = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  x: X,
  sun: Sun,
  moon: Moon,
};

export default function Icons(props: IconsProps) {
  const { className, icon, title } = props;
  const Icon = iconsSet[icon];

  console.log(icon);

  if (!Icon) {
    return null;
  }

  return <Icon className={className} title={title} />;
}
