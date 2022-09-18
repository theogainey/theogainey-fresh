type HeaderProps = {
  home?: boolean;
};

export default function Header({ home }: HeaderProps) {
  return (
    <header class='cmp-header'>
      {!home && (
        <div>
          <a href='/' class='cmp-header__link hover-highlight'>Theo Gainey</a>
        </div>
      )}
    </header>
  );
}
