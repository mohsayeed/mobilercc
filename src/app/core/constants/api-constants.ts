/* eslint-disable @typescript-eslint/naming-convention */
export enum ApiMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    PATCH = 'patch'
  }


export enum AuthEndPoints {
  AUTHENTICATE = 'TritMobileLogins/details',
  RESET_PASSWORD = 'TritMobileLogins/resetpassword?id=',
  LATEST_RATES = 'TritDailyRates/GetLatestDailyRates',
  ISORDERPRESENT = 'TritOrders/isOrderPresent',
  ENTER_ORDER = 'TritOrders/enterorder',
  GET_USERNAME = 'TritUsers/',
  GET_TOP_TEN_RECORDS='TritOrders/getLatestTenOrders',
  UPDATE_RATES = 'TritDailyRates',
  ALL_USERNAMES_IDS = 'TritUsers/getAllUsers',
  GET_ALLORDERS_BYDATE = 'TritOrders/getOrderDetailsByDate'
}
