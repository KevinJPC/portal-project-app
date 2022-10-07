import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const adminApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getActivesAdmin: builder.query({
			query: () => 'admin/actives?page=1',
			headers: {
				authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzRmY2MyYy01YzBlLTQ1MTEtOGZkMC00MGE5M2I4ODZhMWUiLCJqdGkiOiI5MjIyY2VjYWQ5YmI3MDQzZDlkNDkxYjcyY2NmNjExM2Q2ZmQ4YWQzODk2YTk2Njc1ZWY5NmFhYjAwYjUyNjM1OWM2ZjhlMzc4MTcwYTY2OSIsImlhdCI6MTY2NTE3MzQyNy4xNDgxMiwibmJmIjoxNjY1MTczNDI3LjE0ODEyNSwiZXhwIjoxNjY1MjU5ODI2Ljk4ODAwNiwic3ViIjoiMiIsInNjb3BlcyI6W119.oV9IH6BQlGdjs8z6fkq-rXXyNJA5Pehle87uzPxAli2Yl707PsjotwGs9EyqdB0STXLJXbORPRZQJX3jvu_cjwTOdUZcD6EDkwHaRZsq8mpP8bKR9rjtWNOKC0KELlImw5nw3q7hrapxP0xMcT2o4g_iQ31hk0oHo9Xnnjm4MaH02pX0pOut7lm7PwdSupHPFpIjRetLIdUFVhx7ARlu9qNXPo1VgIvAtsz75-Zo06exiFIEeQyCRj1gHjCyDQaOs-BZXIIaD2xmzE-K4tNKN1JJVwf34VFaCpCKh60N-OsCSVmqJ4BBLzEgc601fiSvUbQaWhodeqzNUHFwh-3BYtS7G_1B32D0h4Pbbn1FKQlRDtEzi4IB2w4U3pNpeL_Pgg9DGMmn5IbuebFZd0IiN5Qm99ChlSTXHdPJPygwrgY4cr3Tng1CuJLdDTTHrDnEMSgHtGuW-gXyxVK_34FYbp50Z4Sw8Qse9hykuyZJQcGs4PVT03iDUHZSSiOyxWvTKfLbf6Zkbx0vpy4BQ-FAdQcfsCTEatCaWm0gj-cMaK1SDtreGYPRkLUcFs4gGFodH3DQU1B_hoU2yTm4c76lPL9DKB1Lga2M2bQ1uefpNkku0DDMUR6oyQ19If2wO81Xp-SpQK9tOh5d1UDheuCvgEK6i8IdR0u26DyiBbX-z24`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			providesTags: result => providesList(result, 'Admin'),
		}),
		getInactivesAdmin: builder.query({
			query: () => 'admin/inactives',
			providesTags: result => providesList(result, 'Admin'),
		}),
		getAdminById: builder.query({
			query: adminId => `admin/${adminId}`,
			providesTags: (result, error, arg) => [{ type: 'Admin', id: arg }],
		}),
		addNewAdmin: builder.mutation({
			query: admin => ({
				url: 'admin/register',
				method: 'POST',
				body: { ...admin },
			}),
			invalidatesTags: [{ type: 'Admin', id: 'LIST' }],
		}),
		updateAdmin: builder.mutation({
			query: admin => ({
				url: `admin/${admin.id}`,
				method: 'PATCH',
				body: { ...admin },
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'Admin', id: arg.id }],
		}),
		inactivateAdmin: builder.mutation({
			query: adminId => ({
				url: `admin/${adminId}/inactivate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, adminId) => [{ type: 'Admin', adminId }],
		}),
		activateAdmin: builder.mutation({
			query: adminId => ({
				url: `admin/${adminId}/activate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, adminId) => [{ type: 'Admin', adminId }],
		}),
	}),
})

export const {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
	useGetAdminByIdQuery,
	useAddNewAdminMutation,
	useUpdateAdminMutation,
	useInactivateAdminMutation,
	useActivateAdminMutation,
} = adminApi
