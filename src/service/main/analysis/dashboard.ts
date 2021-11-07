import LYFRequest from '../../index';

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount(): any {
  return LYFRequest.get({
    url: DashboardAPI.categoryGoodsCount
  });
}

export function getCategoryGoodsSale(): any {
  return LYFRequest.get({
    url: DashboardAPI.categoryGoodsSale
  });
}

export function getCategoryGoodsFavor(): any {
  return LYFRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  });
}

export function getAddressGoodsSale(): any {
  return LYFRequest.get({
    url: DashboardAPI.addressGoodsSale
  });
}
