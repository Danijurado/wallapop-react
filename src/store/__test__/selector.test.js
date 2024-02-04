
import { getReduxAdvert } from "../selectors";



describe('getReduxAdverts', () => {
    const advertId = '1';
    const adverts = [{ id: +advertId }];
    const state = { adverts: { data: adverts } };
  
    test('should return a advert by advertId', () => {
      expect(getReduxAdvert(advertId)(state)).toBe(adverts[0]);
    });
  
  });