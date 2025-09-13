Desglose de tareas y alcance inicial para construir una app de finanzas personales como dashboard:

### Objetivo General
Desarrollar una aplicación web tipo dashboard para gestión de finanzas personales, que permita visualizar ingresos, egresos, balance y estadísticas simples (gráficos), con posibilidad de agregar, editar y eliminar transacciones.

### Fases del proyecto
1. **Inicialización y Estructura**
   - Crear estructura base del proyecto (folders, dependencias)
   - Setup de routing (si aplica)
   - Setup de estado global (Context o Redux)
2. **Modelado de datos y componentes básicos**
   - Definir modelo de transacción: {id, tipo, monto, categoría, fecha, nota}
   - Crear componentes: lista de transacciones, formulario de ingreso, resumen (balance)
3. **Funcionalidad CRUD**
   - Agregar, editar y eliminar transacciones
   - Validaciones de formulario
   - LocalStorage (persistencia)
4. **Visualización y estadísticas**
   - Mostrar balance total
   - Gráficos simples (ingresos vs egresos, por categoría)
   - Filtros por fecha/categoría
   - Recharts/Chart.js (gráficos)
5. **Mejoras UI/UX**
   - Responsive, estilos atractivos, feedback visual
   - Animaciones simples
6. **(Opcional) Persistencia**
   - Guardar datos en LocalStorage
   - O usar una API mock (json-server por ejemplo)

Cada fase puede ser una issue separada. Si necesitas ayuda en una fase específica, abre issues de detalle por cada sub-tarea.