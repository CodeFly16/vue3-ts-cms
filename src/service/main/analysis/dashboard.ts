import LyfRequest from '../../index';

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount(): any {
  return LyfRequest.get({
    url: DashboardAPI.categoryGoodsCount
  });
}

export function getCategoryGoodsSale(): any {
  return LyfRequest.get({
    url: DashboardAPI.categoryGoodsSale
  });
}

export function getCategoryGoodsFavor(): any {
  return LyfRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  });
}

export function getAddressGoodsSale(): any {
  return LyfRequest.get({
    url: DashboardAPI.addressGoodsSale
  });
}
