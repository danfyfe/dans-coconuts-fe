'use server'
import getErrorMessage from "@/lib/errors/getErrorMessage"
import { NextResponse } from "next/server";

export async function getProducts() {
  try {
    const fakeProductResponse = await fetch(`${process.env.FAKE_STORE_API}/products`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*'
      }
    });
    const fakeProducts = await fakeProductResponse.json();
    return NextResponse.json({
      products: fakeProducts,
      success: true
    })
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      message,
      success: false
    })
  }
};

export async function getCategories() {
  try {
    const fakeCategoriesResponse = await fetch(`${process.env.FAKE_STORE_API}/products/categories`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*'
      }
    });
    const fakeCategories = await fakeCategoriesResponse.json();
    return NextResponse.json({
      categories: fakeCategories,
      success: true
    })
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      message,
      success: false
    })
  }
};
