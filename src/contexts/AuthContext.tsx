import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// AuthContextType 인터페이스 정의
interface AuthContextType {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

// AuthContext 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProviderProps 인터페이스 정의
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider 컴포넌트 정의
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // 상태 변수 정의
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  // 컴포넌트 마운트 시 로컬 스토리지에서 토큰을 가져와 상태 업데이트
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedAccessToken && storedRefreshToken) {
      setIsLoggedIn(true);
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  // 로그인 함수 정의
  const login = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setIsLoggedIn(true);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  // 로그아웃 함수 정의
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    setAccessToken(null);
    setRefreshToken(null);
  };

  // AuthContext.Provider로 상태값과 함수를 하위 컴포넌트에 제공
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, accessToken, refreshToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 훅 정의, AuthContext를 쉽게 사용하기 위함
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
