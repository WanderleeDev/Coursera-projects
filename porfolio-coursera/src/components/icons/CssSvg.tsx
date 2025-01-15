import { SvgProps } from "../types/SvgProps.type";

export default function CssSvg({ ...props }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32">
      <path
        fill="#639"
        d="M1.995 1.994h23.52a4.48 4.48 0 0 1 4.48 4.48v19.04a4.48 4.48 0 0 1-4.48 4.48H6.475a4.48 4.48 0 0 1-4.48-4.48Z"
      ></path>
      <path
        fill="#fff"
        d="M9.079 24.87v-4.704c0-1.876 1.204-2.884 3.024-2.884c1.792-.028 2.912 1.148 2.856 3.136h-2.072c.056-.756-.28-1.316-.84-1.288c-.7 0-.896.476-.896 1.372v4.088c0 .868.28 1.288.896 1.316c.644 0 .896-.644.84-1.372h2.072c.112 2.044-1.176 3.248-2.996 3.22c-1.764 0-2.884-.98-2.884-2.884m6.636-.336h1.932c.028.896.308 1.456.924 1.456s.84-.364.84-1.204c0-.7-.308-1.092-1.064-1.456l-.728-.336c-1.288-.616-1.82-1.372-1.82-2.884c0-1.68 1.064-2.856 2.8-2.856s2.66 1.204 2.688 3.164h-1.876c0-.812-.168-1.372-.784-1.372c-.56 0-.84.28-.84.98s.252.98.924 1.26l.672.308c1.428.672 2.044 1.54 2.044 3.164c0 1.932-1.092 2.996-2.884 2.996s-2.8-1.232-2.828-3.22m6.328 0h1.96c0 .896.308 1.456.896 1.456s.84-.364.84-1.204c0-.7-.28-1.092-1.064-1.456l-.728-.336c-1.288-.616-1.792-1.372-1.792-2.884c0-1.68 1.036-2.856 2.8-2.856s2.632 1.204 2.688 3.164h-1.876c-.028-.812-.196-1.372-.812-1.372c-.56 0-.812.28-.812.98s.224.98.896 1.26l.7.308c1.4.672 2.016 1.54 2.016 3.164c0 1.932-1.092 2.996-2.884 2.996s-2.8-1.232-2.828-3.22"
      ></path>
    </svg>
  );
}
