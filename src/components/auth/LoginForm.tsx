import React, { useState } from 'react';
import { Trophy, Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">SportClub</h1>
          <p className="text-blue-100">Sistema de Gestão do Clube</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Credenciais de Teste:</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Admin:</strong> admin@clube.pt</p>
                <p><strong>Treinador:</strong> treinador@clube.pt</p>
                <p><strong>Jogador:</strong> jogador@clube.pt</p>
                <p><strong>Coordenador:</strong> coordenador@clube.pt</p>
                <p><strong>Pai:</strong> pai@clube.pt</p>
                <p><strong>Dirigente:</strong> dirigente@clube.pt</p>
                <p className="mt-2 font-medium">Password: qualquer (para demo)</p>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Palavra-passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Entrar</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Problemas de acesso? Contacte o administrador do sistema.
          </p>
        </div>
      </div>
    </div>
  );
}