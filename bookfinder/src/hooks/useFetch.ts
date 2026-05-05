import { useEffect, useState } from "react";
import type { ApiResponse } from "../types/Book";

export default function useFetch<T>(query: string, page: number, baseUrl: string, apiKey: string) {
  const [document, setDocument] = useState<T[]>([]);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    // 검색어가 없으면 실행하지 않음 (빈 화면 유지)
    if (!query) return;

    const fetchBooks = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        // baseUrl에 이미 쿼리스트링이 포함되어 올 수 있으므로 구조를 단순화합니다.
        const endPoint = `${baseUrl}?query=${encodedQuery}&page=${page}`;

        const response = await fetch(endPoint, {
          headers: {
            Authorization: apiKey, // 카카오 API는 Authorization 헤더에 키를 넣어야 합니다.
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // T를 사용하여 어떤 타입의 데이터든 처리할 수 있게 합니다.
        const data: ApiResponse<T> = await response.json();

        setDocument(data.documents);
        setIsEnd(data.meta.is_end);
      } catch (err) {
        console.error("검색 중 오류:", err);
      }
    };

    fetchBooks();
  }, [query, page, baseUrl, apiKey]); // 의존성 배열: 이 값들이 변할 때만 다시 실행됨

  // 외부에서 사용할 변수들을 반환
  return { document, isEnd };
}