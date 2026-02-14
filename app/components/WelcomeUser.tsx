"use client";
export default function WelcomeUser(props: any) {
  return (
    <div>
    <h2>
      Hello {props.name} Welcome to {props.city}
    </h2>
    </div>
  );
}