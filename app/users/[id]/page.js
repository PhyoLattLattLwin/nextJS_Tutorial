'use client'

import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const UserById = () => {
  const {id} = useParams();
  const searchParams = useSearchParams();
  console.log(searchParams.get('page'));
  
  return (
    <div>
      User by id {id}
    </div>
  );
};

export default UserById;