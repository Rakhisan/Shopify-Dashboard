'use client';
import { useState } from 'react';
import styles from './Filter.module.css';

export default function Filter() {
    const [filters, setFilters] = useState({
        category: '',
        subCategory: '',
        vendors: '',
        manufacture: '',
        partNumber: '',
        inStock: true,
        sku: '',
        priceRange: ['', '']
    });

    const handleSelectChange = (name, value) => {
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSkuChange = (e) => {
        setFilters(prev => ({
            ...prev,
            sku: e.target.value
        }));
    };

    const handlePriceChange = (index, value) => {
        setFilters(prev => ({
            ...prev,
            priceRange: prev.priceRange.map((price, i) => i === index ? value : price)
        }));
    };

    const handleSave = () => {
        console.log('Filters saved:', filters);
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterContent}>
                <div className={styles.filterRow}>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.dropdown}
                            value={filters.category}
                            onChange={(e) => handleSelectChange('category', e.target.value)}
                        >
                            <option value="">Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="automotive">Automotive</option>
                        </select>
                        <div className={styles.dropdownIcon}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.27325 8.5H13.7266C13.8584 8.50055 13.9872 8.54019 14.0965 8.6139C14.2058 8.68761 14.2908 8.79208 14.3408 8.9141C14.3907 9.03612 14.4034 9.17021 14.3771 9.29942C14.3508 9.42863 14.2869 9.54715 14.1932 9.64L10.4732 13.36C10.4113 13.4225 10.3375 13.4721 10.2563 13.5059C10.1751 13.5398 10.0879 13.5572 9.99991 13.5572C9.91191 13.5572 9.82477 13.5398 9.74353 13.5059C9.66229 13.4721 9.58856 13.4225 9.52658 13.36L5.80658 9.64C5.71297 9.54715 5.64899 9.42863 5.62273 9.29942C5.59647 9.17021 5.60912 9.03612 5.65907 8.9141C5.70902 8.79208 5.79403 8.68761 5.90335 8.6139C6.01267 8.54019 6.1414 8.50055 6.27325 8.5Z" fill="#727A90" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.dropdown}
                            value={filters.subCategory}
                            onChange={(e) => handleSelectChange('subCategory', e.target.value)}
                        >
                            <option value="">Sub-Category</option>
                            <option value="motors">Motors</option>
                            <option value="sensors">Sensors</option>
                        </select>
                        <div className={styles.dropdownIcon}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.27325 8.5H13.7266C13.8584 8.50055 13.9872 8.54019 14.0965 8.6139C14.2058 8.68761 14.2908 8.79208 14.3408 8.9141C14.3907 9.03612 14.4034 9.17021 14.3771 9.29942C14.3508 9.42863 14.2869 9.54715 14.1932 9.64L10.4732 13.36C10.4113 13.4225 10.3375 13.4721 10.2563 13.5059C10.1751 13.5398 10.0879 13.5572 9.99991 13.5572C9.91191 13.5572 9.82477 13.5398 9.74353 13.5059C9.66229 13.4721 9.58856 13.4225 9.52658 13.36L5.80658 9.64C5.71297 9.54715 5.64899 9.42863 5.62273 9.29942C5.59647 9.17021 5.60912 9.03612 5.65907 8.9141C5.70902 8.79208 5.79403 8.68761 5.90335 8.6139C6.01267 8.54019 6.1414 8.50055 6.27325 8.5Z" fill="#727A90" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.dropdown}
                            value={filters.vendors}
                            onChange={(e) => handleSelectChange('vendors', e.target.value)}
                        >
                            <option value="">Vendors</option>
                            <option value="vendor1">Vendor 1</option>
                            <option value="vendor2">Vendor 2</option>
                        </select>
                        <div className={styles.dropdownIcon}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.27325 8.5H13.7266C13.8584 8.50055 13.9872 8.54019 14.0965 8.6139C14.2058 8.68761 14.2908 8.79208 14.3408 8.9141C14.3907 9.03612 14.4034 9.17021 14.3771 9.29942C14.3508 9.42863 14.2869 9.54715 14.1932 9.64L10.4732 13.36C10.4113 13.4225 10.3375 13.4721 10.2563 13.5059C10.1751 13.5398 10.0879 13.5572 9.99991 13.5572C9.91191 13.5572 9.82477 13.5398 9.74353 13.5059C9.66229 13.4721 9.58856 13.4225 9.52658 13.36L5.80658 9.64C5.71297 9.54715 5.64899 9.42863 5.62273 9.29942C5.59647 9.17021 5.60912 9.03612 5.65907 8.9141C5.70902 8.79208 5.79403 8.68761 5.90335 8.6139C6.01267 8.54019 6.1414 8.50055 6.27325 8.5Z" fill="#727A90" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className={styles.filterRow}>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.dropdown}
                            value={filters.manufacture}
                            onChange={(e) => handleSelectChange('manufacture', e.target.value)}
                        >
                            <option value="">Manufacture</option>
                            <option value="toyota">Toyota</option>
                            <option value="honda">Honda</option>
                        </select>
                        <div className={styles.dropdownIcon}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.27325 8.5H13.7266C13.8584 8.50055 13.9872 8.54019 14.0965 8.6139C14.2058 8.68761 14.2908 8.79208 14.3408 8.9141C14.3907 9.03612 14.4034 9.17021 14.3771 9.29942C14.3508 9.42863 14.2869 9.54715 14.1932 9.64L10.4732 13.36C10.4113 13.4225 10.3375 13.4721 10.2563 13.5059C10.1751 13.5398 10.0879 13.5572 9.99991 13.5572C9.91191 13.5572 9.82477 13.5398 9.74353 13.5059C9.66229 13.4721 9.58856 13.4225 9.52658 13.36L5.80658 9.64C5.71297 9.54715 5.64899 9.42863 5.62273 9.29942C5.59647 9.17021 5.60912 9.03612 5.65907 8.9141C5.70902 8.79208 5.79403 8.68761 5.90335 8.6139C6.01267 8.54019 6.1414 8.50055 6.27325 8.5Z" fill="#727A90" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.dropdown}
                            value={filters.partNumber}
                            onChange={(e) => handleSelectChange('partNumber', e.target.value)}
                        >
                            <option value="">Part Number</option>
                            <option value="part1">Part 1</option>
                            <option value="part2">Part 2</option>
                        </select>
                        <div className={styles.dropdownIcon}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.27325 8.5H13.7266C13.8584 8.50055 13.9872 8.54019 14.0965 8.6139C14.2058 8.68761 14.2908 8.79208 14.3408 8.9141C14.3907 9.03612 14.4034 9.17021 14.3771 9.29942C14.3508 9.42863 14.2869 9.54715 14.1932 9.64L10.4732 13.36C10.4113 13.4225 10.3375 13.4721 10.2563 13.5059C10.1751 13.5398 10.0879 13.5572 9.99991 13.5572C9.91191 13.5572 9.82477 13.5398 9.74353 13.5059C9.66229 13.4721 9.58856 13.4225 9.52658 13.36L5.80658 9.64C5.71297 9.54715 5.64899 9.42863 5.62273 9.29942C5.59647 9.17021 5.60912 9.03612 5.65907 8.9141C5.70902 8.79208 5.79403 8.68761 5.90335 8.6139C6.01267 8.54019 6.1414 8.50055 6.27325 8.5Z" fill="#727A90" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.inStockContainer}>
                        <span className={styles.inStockLabel}>In-Stock</span>
                        <div className={`${styles.checkbox} ${filters.inStock ? styles.checked : ''}`}>
                            <input
                                type="checkbox"
                                checked={filters.inStock}
                                onChange={(e) => handleSelectChange('inStock', e.target.checked)}
                            />
                            <span className={styles.checkmark}>
                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.65613 9.01854L1.72832 6.09073C1.57055 5.93297 1.35658 5.84434 1.13347 5.84434C0.910363 5.84434 0.696391 5.93297 0.538629 6.09073C0.380866 6.24849 0.292236 6.46246 0.292236 6.68557C0.292236 6.79604 0.313996 6.90544 0.356272 7.0075C0.398548 7.10956 0.460513 7.2023 0.538629 7.28042L4.0655 10.8073C4.39457 11.1364 4.92613 11.1364 5.25519 10.8073L14.1821 1.88042C14.3398 1.72265 14.4285 1.50868 14.4285 1.28557C14.4285 1.06246 14.3398 0.848491 14.1821 0.690728C14.0243 0.532966 13.8103 0.444336 13.5872 0.444336C13.3641 0.444336 13.1501 0.532966 12.9924 0.690728L4.65613 9.01854Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.skuSection}>
                    <label className={styles.skuLabel}>Enter SKU</label>
                    <input
                        type="text"
                        className={styles.skuInput}
                        value={filters.sku}
                        onChange={handleSkuChange}
                        placeholder=""
                    />
                </div>

                {/* Price Range */}
                <div className={styles.priceSection}>
                    <label className={styles.priceLabel}>Price Range</label>
                    <div className={styles.priceInputs}>
                        <input
                            type="text"
                            className={styles.priceInput}
                            placeholder="Min"
                            value={filters.priceRange[0]}
                            onChange={(e) => handlePriceChange(0, e.target.value)}
                        />
                        <input
                            type="text"
                            className={styles.priceInput}
                            placeholder="Max"
                            value={filters.priceRange[1]}
                            onChange={(e) => handlePriceChange(1, e.target.value)}
                        />
                    </div>

                    <div className={styles.priceSlider}>
                        <div className={styles.priceValues}>
                            <span>$0</span>
                            <span>$999</span>
                        </div>
                        <div className={styles.sliderContainer}>
                            <div className={styles.sliderTrack}></div>
                            <div className={styles.sliderRange}></div>
                            <div className={styles.sliderThumb} style={{ left: '0%' }}></div>
                            <div className={styles.sliderThumb} style={{ left: '100%' }}></div>
                        </div>
                    </div>
                </div>

                <button className={styles.saveButton} onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
}