interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden hover:-translate-y-3 transition-all">
      <img src={props.bannerUrl} alt="" className="w-full h-full"/>
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <strong className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</strong>
      </div>
    </a>
  );
}