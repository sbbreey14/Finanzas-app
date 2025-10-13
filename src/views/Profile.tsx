export const Profile = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Mi Perfil
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Gestiona tu información personal y preferencias
        </p>
      </div>

      {/* Contenido del perfil */}
      <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          
          {/* Info del usuario */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Usuario Demo</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-2">usuario@finanzasapp.com</p>
            <p className="text-sm text-gray-500">Miembro desde octubre 2024</p>
          </div>
        </div>

        {/* Stats básicas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6">
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
            <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-1">12</div>
            <div className="text-xs sm:text-sm text-gray-600">Servicios Registrados</div>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center">
            <div className="text-lg sm:text-2xl font-bold text-green-600 mb-1">$85k</div>
            <div className="text-xs sm:text-sm text-gray-600">Gasto Promedio</div>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg text-center col-span-2 sm:col-span-1">
            <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1">3</div>
            <div className="text-xs sm:text-sm text-gray-600">Meses Activo</div>
          </div>
        </div>

        {/* Configuraciones */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Configuración</h3>
          
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg">
              <div className="mb-2 sm:mb-0">
                <h4 className="text-sm font-medium text-gray-900">Notificaciones</h4>
                <p className="text-xs text-gray-600">Recibe alertas sobre tus gastos</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg">
              <div className="mb-2 sm:mb-0">
                <h4 className="text-sm font-medium text-gray-900">Modo Oscuro</h4>
                <p className="text-xs text-gray-600">Cambiar tema de la aplicación</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg">
              <div className="mb-2 sm:mb-0">
                <h4 className="text-sm font-medium text-gray-900">Reportes Mensuales</h4>
                <p className="text-xs text-gray-600">Recibe un resumen cada mes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};