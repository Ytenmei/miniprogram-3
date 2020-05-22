import http from '../utils/index.js'

/* 获取swiper and grid */
export const getHomeData = ({
  type
}) => {
  return http({
    actionName: 'Gethome',
    data: {
      type
    }
  })
}
export const getShoppingCartCount = ({
  orderJson
}) => {
  return http({
    actionName: 'GetMobileShoppingCartCount',
    data: {
      orderJson
    }
  })
}