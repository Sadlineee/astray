import * as city from '@data/cities'

export const cityMap: Record<string, typeof city.AmsterdamData> = {
  London: city.LondonData,
  Paris: city.ParisData,
  NewYork: city.NewYorkData,
  Moscow: city.MoscowData,
  Rome: city.RomeData,
  RioDeJaneiro: city.RioDeJaneiroData,
  Amsterdam: city.AmsterdamData,
  Prague: city.PragueData,
  Singapore: city.SingaporeData
}