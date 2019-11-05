require 'test_helper'

class FestControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fest_index_url
    assert_response :success
  end

  test "should get edit" do
    get fest_edit_url
    assert_response :success
  end

end
