import http from '../utils/index.js'

export const getProList = ({
  activeurl: activeUrl,
  pageIndex,
  pageSize
}) => {
  return http({
    actionName: 'GetMobileActiveProducts',
    data: {
      activeUrl,
      pageIndex,
      pageSize
    }
  })
} 