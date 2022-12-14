/* An array of objects that are being used to create the links in the profile menu for admin users. */
export const profileAdminLinks = [
	{ to: 'admin/usuario/editar-perfil', label: 'Editar perfil' },
	{ to: 'admin/usuario/cambiar-contrasena', label: 'Cambiar contraseña' },
]
/* An array of objects that are being used to create the links in the profile menu for general users. */
export const profileGeneralLinks = [
	{ to: 'usuario/editar-perfil', label: 'Editar perfil' },
	{ to: 'usuario/cambiar-contrasena', label: 'Cambiar contraseña' },
]

/* An array of objects that are being used to create the links in the navbar of the admin user. */
export const adminUserLinks = [
	{ to: 'admin/procesos', label: 'Administrar procesos' },
	{ to: 'admin/roles', label: 'Administrar roles' },
	{ to: 'admin/usuarios', label: 'Administrar usuarios' },
]

/* An array of objects that are being used to create the links in the navbar. */
export const generalUserLinks = [
	{ to: 'procesos', label: 'Procesos' },
	{ to: 'mis-procesos', label: 'Mis procesos' },
]

/* An array of objects of temporary notifications. */
export const notifications = [
	{
		label: 'Peticion de registro bancario',
		description:
			'Acción pendiente en P00003 en la actividad Agregar documentos',
	},
	{
		label: 'Peticion de registro bancario 2',
		description: 'Acción pendiente en P00003 en la actividad confirmar datos',
	},
	{
		label: 'Peticion de registro bancario 3',
		description: 'Tiene tareas pendiente en este proceso',
	},
	{
		label: 'Peticion de registro bancario 4',
		description: 'Tiene tareas pendiente en este proceso',
	},
	{
		label: 'Peticion de registro bancario 5',
		description: 'Tiene tareas pendiente en este proceso',
	},
]
