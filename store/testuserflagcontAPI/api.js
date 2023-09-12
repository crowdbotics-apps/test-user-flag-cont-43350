import axios from "axios"
const testuserflagcontAPI = axios.create({
  baseURL: "https://test-user-flag-cont-43350.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testuserflagcontAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return testuserflagcontAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return testuserflagcontAPI.post(`/api/v1/signup/`, payload.data)
}
function modules_flag_user_content_choice_list_retrieve(payload) {
  return testuserflagcontAPI.get(`/modules/flag-user-content/choice-list/`)
}
function modules_flag_user_content_create_report_create(payload) {
  return testuserflagcontAPI.post(`/modules/flag-user-content/create-report/`)
}
function modules_flag_user_content_reported_list_retrieve(payload) {
  return testuserflagcontAPI.get(`/modules/flag-user-content/reported-list/`)
}
function rest_auth_login_create(payload) {
  return testuserflagcontAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return testuserflagcontAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testuserflagcontAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testuserflagcontAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return testuserflagcontAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testuserflagcontAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return testuserflagcontAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return testuserflagcontAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return testuserflagcontAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testuserflagcontAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return testuserflagcontAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_flag_user_content_choice_list_retrieve,
  modules_flag_user_content_create_report_create,
  modules_flag_user_content_reported_list_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
