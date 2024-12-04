import CampaignCard from './CampaignCard';

const App = () => {
  return (
    <div>
      <CampaignCard
        title="Fiber'de 1000 Mbps Fırsat Kampanyası"
        badge1="Online'a Özel"
        badge2="Fiber İnternet"
        speedValue="1000"
        speedText="Mbps İndirme Hızı"
        commitment1="12 Ay Taahhüt"
        commitment2="Limitsiz"
        price="600 TL/Ay"
        priceAction="/ev-interneti/fiber-internet/fiberde-1000-mbps-firsat-kampanyasi/1000-mbps"
      />
    </div>
  );
};

export default App;