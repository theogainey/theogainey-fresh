export default function HomeHero() {
  return (
    <div class='cmp-home-hero'>
      <div class='cmp-home-hero__about'>
        <h1 class='cmp-home-hero__name'>Theo Gainey</h1>
        <h2 class='cmp-home-hero__job'>
          Developer at{' '}
          <a
            href='https://realart.com/'
            target='blank'
            class='cmp-home-hero__company hover-highlight'
          >
            Real Art
          </a>
        </h2>
        <p class='cmp-home-hero__detail'>
        </p>
      </div>
      <div class='cmp-home-hero__image-container'>
        <img
          alt=''
          height='150'
          width='150'
          src='/theo-gainey.webp'
          class='cmp-home-hero__image'
        />
      </div>
    </div>
  );
}
