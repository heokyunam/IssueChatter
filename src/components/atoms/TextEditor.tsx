import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

interface TextEditorParam {
  editorState: EditorState,
  setEditorState(editorState: EditorState): void,
}

const TextEditor = (params: TextEditorParam) => {
  return (
    <Editor
    // 에디터와 툴바 모두에 적용되는 클래스
    wrapperClassName="wrapper-class"
    // 에디터 주변에 적용된 클래스
    editorClassName="editor"
    // 툴바 주위에 적용된 클래스
    toolbarClassName="toolbar-class"
    // 툴바 설정
    toolbar={{
        // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: false },
    }} 
    placeholder="내용을 작성해주세요."
    // 한국어 설정
    localization={{
        locale: 'ko',
    }}
    // 초기값 설정
    editorState={params.editorState}
    // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
    onEditorStateChange={params.setEditorState}
    />
  );
};

export default TextEditor;