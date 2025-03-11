---
title: Building ETL Pipelines
sidebar_label: ETL Pipelines
description: Understanding and implementing Extract, Transform, Load (ETL) pipelines for data processing
---

# Building ETL Pipelines

ETL (Extract, Transform, Load) is a fundamental data processing pattern used to collect data from various sources, transform it to meet business needs, and load it into a target destination like a data warehouse.

![ETL Process Diagram](/img/etl.png)

## ETL Process Components

### 1. Extract

The extract phase involves pulling data from source systems. These sources could be:
- Relational databases
- APIs
- Flat files (CSV, JSON)
- Web scraping
- IoT devices

### 2. Transform

The transformation phase involves cleaning, validating, and restructuring the data to prepare it for analysis:
- Data cleansing
- Normalization
- Aggregation
- Filtering
- Type conversion
- Key generation

### 3. Load

The loading phase involves writing the processed data to a destination system:
- Data warehouses
- Data lakes
- Databases
- Application data stores

## Example ETL Pipeline in Python

Here's a simple ETL pipeline using Python with Pandas for transforming CSV data:

```python
import pandas as pd
import numpy as np
from datetime import datetime

def extract():
    """Extract data from CSV files"""
    print("Extracting data...")
    
    # Load sales data
    sales_df = pd.read_csv('sales_data.csv')
    
    # Load customer data
    customer_df = pd.read_csv('customer_data.csv')
    
    return sales_df, customer_df

def transform(sales_df, customer_df):
    """Transform the extracted data"""
    print("Transforming data...")
    
    # Clean sales data
    sales_df = sales_df.dropna(subset=['transaction_id', 'product_id'])
    sales_df['sale_date'] = pd.to_datetime(sales_df['sale_date'])
    sales_df['amount'] = sales_df['amount'].astype(float)
    
    # Add calculated fields
    sales_df['month'] = sales_df['sale_date'].dt.month
    sales_df['year'] = sales_df['sale_date'].dt.year
    
    # Join with customer data
    merged_df = pd.merge(
        sales_df,
        customer_df[['customer_id', 'customer_name', 'segment']],
        on='customer_id',
        how='left'
    )
    
    # Calculate aggregations
    summary_df = merged_df.groupby(['year', 'month', 'segment']).agg({
        'amount': ['sum', 'mean', 'count'],
        'transaction_id': pd.Series.nunique
    }).reset_index()
    
    summary_df.columns = ['year', 'month', 'segment', 'total_sales', 
                         'average_sale', 'transaction_count', 'unique_transactions']
    
    return merged_df, summary_df

def load(merged_df, summary_df):
    """Load transformed data to destination"""
    print("Loading data...")
    
    # Save detailed data to parquet format
    merged_df.to_parquet('processed_sales_data.parquet')
    
    # Save summary data to CSV
    summary_df.to_csv('sales_summary.csv', index=False)
    
    # In a real scenario, you might load to a database
    print(f"Data successfully loaded. Processed {len(merged_df)} rows.")
    print(f"Created summary with {len(summary_df)} rows.")

def run_etl_pipeline():
    """Run the full ETL pipeline"""
    start_time = datetime.now()
    print(f"Starting ETL pipeline at {start_time}")
    
    # Extract
    sales_df, customer_df = extract()
    
    # Transform
    merged_df, summary_df = transform(sales_df, customer_df)
    
    # Load
    load(merged_df, summary_df)
    
    end_time = datetime.now()
    print(f"ETL pipeline completed at {end_time}")
    print(f"Total runtime: {end_time - start_time}")

if __name__ == "__main__":
    run_etl_pipeline()
```

## Best Practices for ETL Development

1. **Idempotency**: Ensure your pipelines can be run multiple times without creating duplicate data
2. **Error Handling**: Implement robust error handling and logging
3. **Monitoring**: Set up monitoring for your ETL processes with alerts
4. **Incremental Processing**: Process only new or changed data when possible
5. **Data Validation**: Validate input and output data with schema enforcement
6. **Version Control**: Keep your ETL code in version control
7. **Documentation**: Document data lineage and transformation logic

## Modern ETL Tools

- **Apache Airflow**: Workflow management platform
- **Apache NiFi**: Data flow automation
- **AWS Glue**: Serverless ETL service
- **Talend**: Open-source integration platform
- **Informatica PowerCenter**: Enterprise data integration

