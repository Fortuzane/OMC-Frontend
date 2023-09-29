// react
import React, { useMemo } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// application
import shopApi from '../../api/shop';
import { useDeferredData, useProductColumns, useProductTabs } from '../../services/hooks';

// blocks
import BlockBanner from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockCategories from '../blocks/BlockCategories';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockPosts from '../blocks/BlockPosts';
import BlockProductColumns from '../blocks/BlockProductColumns';
import BlockProducts from '../blocks/BlockProducts';
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';
import BlockSlideShow from '../blocks/BlockSlideShow';

// data stubs
import categories from '../../data/shopBlockCategories';
import posts from '../../data/blogPosts';
import theme from '../../data/theme';

function HomePageOne() {
    /**
     * Featured products.
     */
    const featuredProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'All', categorySlug: undefined },
        ], []),
        (tab) => shopApi.getPopularProducts({ limit: 8, category: tab.categorySlug }),
    );

    /**
     * Bestsellers.
     */
    const bestsellers = useDeferredData(() => (
        shopApi.getPopularProducts({ limit: 7 })
    ), []);

    /**
     * Latest products.
     */
    const latestProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'All', categorySlug: undefined },
        ], []),
        (tab) => shopApi.getLatestProducts({ limit: 8, category: tab.categorySlug }),
    );

    /**
     * Product columns.
     */
    const columns = useProductColumns(
        useMemo(() => [
            {
                title: 'Top Rated Products',
                source: () => shopApi.getTopRatedProducts({ limit: 3 }),
            },
            {
                title: 'Special Offers',
                source: () => shopApi.getDiscountedProducts({ limit: 3 }),
            },
            {
                title: 'Bestsellers',
                source: () => shopApi.getPopularProducts({ limit: 3 }),
            },
        ], []),
    );

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Online Marketing Complex`}</title>
            </Helmet>

            {useMemo(() => <BlockSlideShow withDepartments />, [])}

            {useMemo(() => <BlockFeatures />, [])}

            {useMemo(() => (
                <BlockProductsCarousel
                    title="Special Offers"
                    layout="grid-5"
                    products={featuredProducts.data}
                    loading={featuredProducts.isLoading}
                    onGroupClick={featuredProducts.handleTabChange}
                />
            ), [featuredProducts])}

            {useMemo(() => <BlockBanner />, [])}

            {useMemo(() => (
                <BlockProductsCarousel
                    title="New Arrivals"
                    layout="horizontal"
                    rows={2}
                    products={latestProducts.data}
                    loading={latestProducts.isLoading}
                    onGroupClick={latestProducts.handleTabChange}
                />
            ), [latestProducts])}

            {useMemo(() => (
                <BlockProducts
                    title="Bestsellers"
                    layout="large-first"
                    featuredProduct={bestsellers.data[0]}
                    products={bestsellers.data.slice(1, 7)}
                />
            ), [bestsellers.data])}

            {useMemo(() => (
                <BlockCategories
                    title="Popular Categories"
                    layout="classic"
                    categories={categories}
                />
            ), [])}


        </React.Fragment>
    );
}

export default HomePageOne;
