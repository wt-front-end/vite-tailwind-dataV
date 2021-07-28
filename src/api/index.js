/*
 * @Author: xkloveme
 * @Date: 2021-07-28 17:14:28
 * @LastEditTime: 2021-07-28 17:33:28
 * @LastEditors: xkloveme
 * @Description: 接口
 * @FilePath: /shijianwei-dx-hidden-danger/src/api/index.js
 * @Copyright © xkloveme
 */
import { axios } from '@/utils/request'


// 测试post请求
export const postTemplateUpdateApi = data => axios.post(`/data/xcx/dept/getXcxZj/${data}`, data)
// 测试get请求
export const getZjApi = params => axios.get(`/data/xcx/dept/getXcxZj/${params.id}`, { params })