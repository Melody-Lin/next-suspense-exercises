import React from 'react';

import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import ArticleWrapper from '@/components/ArticleWrapper';

import { range } from '@/utils';

function VaporLoading() {
  return (
    <ArticleWrapper>
      {range(12).map((num) => (
        <LibraryGameCardSkeleton key={num} />
      ))}
    </ArticleWrapper>
  );
}

export default VaporLoading;
