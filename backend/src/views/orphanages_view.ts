import { Orphanage } from '../models/Orphanage';
import imagesView, { ImageView } from './images_view';

interface OrphanageView extends Omit<Orphanage, 'images'> {
  images: ImageView[];
}

export default {
  render({
    id,
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
    images,
  }: Orphanage): OrphanageView {
    return {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images: imagesView.renderMany(images),
    };
  },

  renderMany(orphanages: Orphanage[]): OrphanageView[] {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
