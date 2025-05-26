import React from "react";

export default function DeleteConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Eliminar Cuenta</h3>
        <p className="text-gray-300 mb-6">
          ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción eliminará
          permanentemente todos tus datos, incluyendo rutinas, progreso y suscripciones.
          Esta acción no se puede deshacer.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Eliminar Cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
